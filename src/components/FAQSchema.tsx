'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQSchema({ items, title = 'Veelgestelde vragen' }: FAQSchemaProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Generate FAQ schema
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };

    // Remove existing schema if present
    const existingScript = document.querySelector('script[data-faq-schema]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faq-schema', 'true');
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const script = document.querySelector('script[data-faq-schema]');
      if (script) {
        script.remove();
      }
    };
  }, [items]);

  return (
    <section className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">{title}</h2>
        <p className="text-stone-600">Vind antwoorden op veelgestelde vragen</p>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={`w-full text-left transition-all duration-200 border rounded-lg overflow-hidden ${
              openIndex === index
                ? 'border-emerald-400 bg-emerald-50'
                : 'border-stone-200 bg-white hover:border-emerald-300'
            }`}
          >
            {/* Question */}
            <div className="px-6 py-4 flex items-center justify-between gap-4">
              <h3 className="font-semibold text-stone-900 text-left">{item.question}</h3>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-emerald-600 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </div>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-6 py-4 border-t border-emerald-200 bg-white text-stone-700 text-sm md:text-base leading-relaxed">
                {item.answer}
              </div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
