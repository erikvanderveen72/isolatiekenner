'use client';

import { useState, useMemo } from 'react';
import { Info } from 'lucide-react';
import Calculator from './Calculator';

// Type definitions
interface IsolatieType {
  id: string;
  label: string;
  costMin: number;
  costMax: number;
  savingsPerYear: number;
  subsidyBase: number;
  co2ReductionPerM2: number;
}

interface CalculatorResult {
  totalCost: { min: number; max: number };
  subsidyAmount: number;
  netCost: { min: number; max: number };
  yearlyWasteAmount: number;
  paybackPeriod: { min: number; max: number };
  co2Reduction: number;
  tenYearSavings: number;
}

// Isolation types data
const isolatieTypes: IsolatieType[] = [
  {
    id: 'dak',
    label: 'Dakisolatie',
    costMin: 15,
    costMax: 25,
    savingsPerYear: 180,
    subsidyBase: 400,
    co2ReductionPerM2: 25,
  },
  {
    id: 'spouw',
    label: 'Spouwmuurisolatie',
    costMin: 10,
    costMax: 20,
    savingsPerYear: 120,
    subsidyBase: 300,
    co2ReductionPerM2: 18,
  },
  {
    id: 'vloer',
    label: 'Vloerisolatie',
    costMin: 20,
    costMax: 35,
    savingsPerYear: 150,
    subsidyBase: 350,
    co2ReductionPerM2: 20,
  },
  {
    id: 'glas',
    label: 'HR++ Glas',
    costMin: 300,
    costMax: 600,
    savingsPerYear: 200,
    subsidyBase: 500,
    co2ReductionPerM2: 30,
  },
  {
    id: 'kruip',
    label: 'Kruipruimteisolatie',
    costMin: 12,
    costMax: 22,
    savingsPerYear: 100,
    subsidyBase: 250,
    co2ReductionPerM2: 15,
  },
  {
    id: 'gevel',
    label: 'Gevelisolatie',
    costMin: 25,
    costMax: 40,
    savingsPerYear: 160,
    subsidyBase: 400,
    co2ReductionPerM2: 22,
  },
];

// Formatter utilities
function formatCurrency(value: number): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('nl-NL', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function IsolatieCalculator() {
  const [selectedType, setSelectedType] = useState<string>(isolatieTypes[0].id);
  const [oppervlakte, setOppervlakte] = useState<number>(50);
  const [combinatieMaatregel, setCombinateMaatregel] = useState<boolean>(false);

  // Calculate results
  const result: CalculatorResult = useMemo(() => {
    const isolatie = isolatieTypes.find((t) => t.id === selectedType);
    if (!isolatie) return {} as CalculatorResult;

    // Total cost
    const totalCostMin = isolatie.costMin * oppervlakte;
    const totalCostMax = isolatie.costMax * oppervlakte;

    // Subsidy
    let subsidyAmount = isolatie.subsidyBase * oppervlakte;
    if (combinatieMaatregel) {
      subsidyAmount *= 2; // Double subsidy for combination measures
    }

    // Net cost
    const netCostMin = totalCostMin - subsidyAmount;
    const netCostMax = totalCostMax - subsidyAmount;

    // Yearly waste/savings
    const yearlyWasteAmount = isolatie.savingsPerYear * oppervlakte;

    // Payback period
    const paybackMin = netCostMin > 0 ? netCostMin / yearlyWasteAmount : 0;
    const paybackMax = netCostMax > 0 ? netCostMax / yearlyWasteAmount : 0;

    // CO2 reduction
    const co2Reduction = isolatie.co2ReductionPerM2 * oppervlakte;

    // 10-year savings
    const tenYearSavings = yearlyWasteAmount * 10 - Math.max(netCostMin, netCostMax);

    return {
      totalCost: { min: totalCostMin, max: totalCostMax },
      subsidyAmount,
      netCost: { min: Math.max(0, netCostMin), max: Math.max(0, netCostMax) },
      yearlyWasteAmount,
      paybackPeriod: {
        min: Math.max(0, Math.round(paybackMin * 10) / 10),
        max: Math.max(0, Math.round(paybackMax * 10) / 10),
      },
      co2Reduction: Math.round(co2Reduction),
      tenYearSavings: Math.round(tenYearSavings),
    };
  }, [selectedType, oppervlakte, combinatieMaatregel]);

  // Result cards
  const ResultCard = ({
    label,
    value,
    bgColor,
    icon,
  }: {
    label: string;
    value: string;
    bgColor: string;
    icon?: React.ReactNode;
  }) => (
    <div className={`${bgColor} rounded-lg p-4 md:p-6 border border-stone-200`}>
      <div className="flex items-start justify-between mb-2">
        <p className="text-xs md:text-sm font-medium text-stone-600">{label}</p>
        {icon}
      </div>
      <p className="text-xl md:text-2xl font-bold text-stone-900">{value}</p>
    </div>
  );

  const resultContent = (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <ResultCard
          label="Geschatte kosten"
          value={`${formatCurrency(result.totalCost?.min || 0)} - ${formatCurrency(result.totalCost?.max || 0)}`}
          bgColor="bg-amber-50"
        />

        <ResultCard
          label="ISDE Subsidie"
          value={`-${formatCurrency(result.subsidyAmount || 0)}`}
          bgColor="bg-emerald-50"
        />

        <ResultCard
          label="Netto kosten"
          value={`${formatCurrency(result.netCost?.min || 0)} - ${formatCurrency(result.netCost?.max || 0)}`}
          bgColor="bg-sky-50"
        />

        <ResultCard
          label="Jaarlijkse besparing"
          value={`${formatCurrency(result.yearlyWasteAmount || 0)}`}
          bgColor="bg-emerald-50"
        />

        <ResultCard
          label="Terugverdientijd"
          value={`${result.paybackPeriod?.min || 0}-${result.paybackPeriod?.max || 0} jaar`}
          bgColor="bg-blue-50"
        />

        <ResultCard
          label="CO₂ reductie per jaar"
          value={`${formatNumber(result.co2Reduction || 0)} kg`}
          bgColor="bg-teal-50"
        />

        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg p-4 md:p-6 border border-emerald-600">
          <p className="text-xs md:text-sm font-medium text-emerald-100 mb-2">
            Besparing over 10 jaar
          </p>
          <p className="text-2xl md:text-3xl font-bold text-white">
            {formatCurrency(result.tenYearSavings || 0)}
          </p>
        </div>
      </div>

      {/* Info box */}
      <div className="mt-6 p-4 bg-stone-50 rounded-lg border border-stone-200 flex gap-3">
        <Info size={18} className="text-stone-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs md:text-sm text-stone-600">
          Deze berekening is gebaseerd op gemiddelde kostprijzen en besparingsgegevens.
          Raadpleeg een professioneel installateur voor een nauwkeurig offerte.
        </p>
      </div>
    </div>
  );

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20" id="calculator">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">
          Isolatie Kostenberekening
        </h2>
        <p className="text-stone-600">
          Bereken de kosten en besparing van uw isolatieproject
        </p>
      </div>

      <Calculator
        title="Calculator"
        description="Vul uw isolatietype en oppervlakte in voor een schatting"
        result={resultContent}
      >
        {/* Isolation type dropdown */}
        <div>
          <label className="block text-sm font-semibold text-stone-900 mb-2">
            Isolatietype
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-stone-900"
          >
            {isolatieTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Area slider and input */}
        <div>
          <label className="block text-sm font-semibold text-stone-900 mb-2">
            Oppervlakte (m²)
          </label>
          <input
            type="range"
            min="10"
            max="200"
            value={oppervlakte}
            onChange={(e) => setOppervlakte(parseInt(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <input
            type="number"
            min="10"
            max="200"
            value={oppervlakte}
            onChange={(e) => setOppervlakte(parseInt(e.target.value) || 50)}
            className="w-full mt-3 px-4 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-stone-900"
          />
        </div>

        {/* Combination measure checkbox */}
        <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg border border-stone-200">
          <input
            type="checkbox"
            id="combinatie"
            checked={combinatieMaatregel}
            onChange={(e) => setCombinateMaatregel(e.target.checked)}
            className="w-4 h-4 rounded accent-emerald-600 cursor-pointer"
          />
          <label htmlFor="combinatie" className="text-sm font-medium text-stone-900 cursor-pointer">
            Ik combineer met een andere maatregel (subsidie verdubbeling)
          </label>
        </div>
      </Calculator>
    </section>
  );
}
