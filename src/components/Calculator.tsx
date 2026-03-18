import { ReactNode } from 'react';

interface CalculatorProps {
  title: string;
  description?: string;
  children: ReactNode;
  result?: ReactNode;
}

export default function Calculator({
  title,
  description,
  children,
  result,
}: CalculatorProps) {
  return (
    <div className="w-full rounded-2xl border border-stone-200 shadow-lg overflow-hidden bg-white">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 px-6 md:px-8 py-6 md:py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
        {description && (
          <p className="text-emerald-100 text-sm md:text-base">{description}</p>
        )}
      </div>

      {/* Content */}
      <div className="lg:grid lg:grid-cols-2 gap-8">
        {/* Left column - Inputs */}
        <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-stone-200">
          <div className="space-y-6">
            {children}
          </div>
        </div>

        {/* Right column - Results */}
        {result && (
          <div className="p-6 md:p-8 bg-stone-50">
            <div className="space-y-6">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
