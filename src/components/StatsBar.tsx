'use client';

import { useState, useEffect, useRef } from 'react';
import { Thermometer, Banknote, Award, Clock } from 'lucide-react';

const defaultStats = [
  { label: 'Warmteverlies via dak', value: '30%', icon: 'thermometer' },
  { label: 'Gemiddelde besparing/jaar', value: '€500+', icon: 'banknote' },
  { label: 'ISDE Budget 2026', value: '€509 mln', icon: 'award' },
  { label: 'Terugverdientijd', value: '2-7 jaar', icon: 'clock' },
];

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  thermometer: Thermometer,
  banknote: Banknote,
  award: Award,
  clock: Clock,
};

function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const numericValue = parseInt(value.replace(/\D/g, ''));

          if (!isNaN(numericValue) && numericValue > 0) {
            const startTime = Date.now();
            const duration = 2000;

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
          } else {
            setDisplayValue(value);
            setHasAnimated(true);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-emerald-600">
      {displayValue}
    </div>
  );
}

export default function StatsBar() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {defaultStats.map((stat, index) => {
        const Icon = iconMap[stat.icon] || Thermometer;

        return (
          <div
            key={index}
            className="bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow p-6"
          >
            <div className="mb-4 w-fit p-3 bg-emerald-50 rounded-lg">
              <Icon size={20} className="text-emerald-600" />
            </div>
            <AnimatedCounter value={stat.value} />
            <p className="text-sm text-stone-600 mt-3">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
