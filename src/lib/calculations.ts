/**
 * Pure calculation functions for isolatiekenner
 * All functions are deterministic and don't depend on external state
 */

import {
  gasPrijsPerM3,
  co2PerM3Gas,
  type IsolatieTypeValue,
  type IsolatieType,
  type SubsidieBedrag,
} from "./fallback-data";

// ============================================================================
// INTERFACES FOR CALCULATION RESULTS
// ============================================================================

export interface KostenBerekening {
  /** Minimale kosten in euro */
  kostenMin: number;
  /** Maximale kosten in euro */
  kostenMax: number;
  /** Gemiddelde kosten */
  kostenGemiddeld: number;
  /** Subsidie voor enkele maatregel */
  subsidieEnkel: number;
  /** Subsidie voor gecombineerde maatregel */
  subsidieCombi: number;
  /** Netto kosten minimum (na subsidie enkel) */
  nettoKostenMin: number;
  /** Netto kosten maximum (na subsidie enkel) */
  nettoKostenMax: number;
}

export interface BesparingBerekening {
  /** Gasbesparings in m3 per jaar */
  gasbesparingM3: number;
  /** Gasbesparings in euro per jaar */
  gasbesparingEuro: number;
  /** Jaarlijkse totale besparing (gas + onderhoud) */
  jaarlijkseBesparing: number;
  /** Terugverdientijd in jaren (op basis van gemiddelde kosten) */
  terugverdientijdJaren: number;
  /** Totale besparing over 10 jaar */
  besparingOver10Jaar: number;
  /** CO2 reductie in kg per jaar */
  co2ReductieKg: number;
}

export interface EnergielabelBerekening {
  /** Huidig energielabel */
  huidigLabel: string;
  /** Nieuw geschat energielabel */
  nieuwLabel: string;
  /** Aantal stappen omhoog */
  aantalStappen: number;
  /** Geschatte waardeverhogings in % */
  geschatteWaardestijging: number;
}

// ============================================================================
// KOSTEN BEREKENINGEN
// ============================================================================

/**
 * Bereken isolatie kosten inclusief subsidie
 *
 * @param isolatieType - Het isolatie type
 * @param oppervlakteM2 - Oppervlakte in vierkante meters
 * @param subsidie - Subsidiebedrag (optioneel)
 * @returns Kostenberekening object
 */
export function berekenIsolatieKosten(
  isolatieType: IsolatieType,
  oppervlakteM2: number,
  subsidie?: SubsidieBedrag
): KostenBerekening {
  // Totale kosten
  const kostenMin = isolatieType.kostenMin * oppervlakteM2;
  const kostenMax = isolatieType.kostenMax * oppervlakteM2;
  const kostenGemiddeld = (kostenMin + kostenMax) / 2;

  // Subsidies
  let subsidieEnkel = 0;
  let subsidieCombi = 0;

  if (subsidie) {
    // Check minimum/maximum oppervlakte
    if (
      oppervlakteM2 >= subsidie.minOppervlakte &&
      oppervlakteM2 <= subsidie.maxOppervlakte
    ) {
      subsidieEnkel = subsidie.bedragPerM2 * oppervlakteM2;
      subsidieCombi = subsidie.bedragPerM2Combinatie * oppervlakteM2;
    }
  }

  // Netto kosten
  const nettoKostenMin = Math.max(0, kostenMin - subsidieEnkel);
  const nettoKostenMax = Math.max(0, kostenMax - subsidieEnkel);

  return {
    kostenMin,
    kostenMax,
    kostenGemiddeld,
    subsidieEnkel,
    subsidieCombi,
    nettoKostenMin,
    nettoKostenMax,
  };
}

// ============================================================================
// BESPARINGS BEREKENINGEN
// ============================================================================

/**
 * Bereken energiebesparing
 *
 * @param isolatieType - Het isolatie type
 * @param oppervlakteM2 - Oppervlakte in vierkante meters
 * @returns Besparingberekening object
 */
export function berekenBesparing(
  isolatieType: IsolatieType,
  oppervlakteM2: number
): BesparingBerekening {
  // Gasbesparings per jaar
  const gasbesparingM3 = (isolatieType.besparing * oppervlakteM2) / 100; // Schaal naar oppervlakte
  const gasbesparingEuro = gasbesparingM3 * gasPrijsPerM3;

  // Jaarlijkse besparing (alleen gas, geen onderhoudskosten)
  const jaarlijkseBesparing = gasbesparingEuro;

  // Gemiddelde kosten voor terugverdientijd
  const kostenMin = isolatieType.kostenMin * oppervlakteM2;
  const kostenMax = isolatieType.kostenMax * oppervlakteM2;
  const kostenGemiddeld = (kostenMin + kostenMax) / 2;

  // Terugverdientijd
  const terugverdientijdJaren =
    jaarlijkseBesparing > 0
      ? kostenGemiddeld / jaarlijkseBesparing
      : isolatieType.terugverdientijd.max;

  // 10-jaars besparing
  const besparingOver10Jaar = jaarlijkseBesparing * 10;

  // CO2 reductie
  const co2ReductieKg = gasbesparingM3 * co2PerM3Gas;

  return {
    gasbesparingM3: Math.round(gasbesparingM3 * 100) / 100,
    gasbesparingEuro: Math.round(gasbesparingEuro * 100) / 100,
    jaarlijkseBesparing: Math.round(jaarlijkseBesparing * 100) / 100,
    terugverdientijdJaren: Math.round(terugverdientijdJaren * 10) / 10,
    besparingOver10Jaar: Math.round(besparingOver10Jaar * 100) / 100,
    co2ReductieKg: Math.round(co2ReductieKg * 100) / 100,
  };
}

// ============================================================================
// ENERGIELABEL BEREKENINGEN
// ============================================================================

/**
 * Energielabel stappen oplopend van beter naar slechter
 * A++++ (0) -> G (10)
 */
const energielabelOpsomming = [
  "A++++",
  "A+++",
  "A++",
  "A+",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
];

/**
 * Bereken nieuw energielabel na isolatie maatregelen
 *
 * @param huidigLabel - Huidig energielabel
 * @param maatregelen - Array van isolatie types die worden toegepast
 * @returns Energielabelberekening
 */
export function berekenEnergielabel(
  huidigLabel: string,
  maatregelen: IsolatieType[]
): EnergielabelBerekening {
  // Find current label index
  const huidigIndex = energielabelOpsomming.indexOf(huidigLabel);
  if (huidigIndex === -1) {
    return {
      huidigLabel,
      nieuwLabel: huidigLabel,
      aantalStappen: 0,
      geschatteWaardestijging: 0,
    };
  }

  // Calculate total improvement steps
  let totalStappen = 0;
  maatregelen.forEach((maatregel) => {
    totalStappen += maatregel.energielabelVerbetering;
  });

  // New index (lower = better)
  const nieuwIndex = Math.max(0, huidigIndex - totalStappen);
  const nieuwLabel = energielabelOpsomming[nieuwIndex];

  // Estimate property value increase
  // Each label improvement ~ 2-3% value increase (conservative estimate)
  const geschatteWaardestijging = totalStappen * 2.5;

  return {
    huidigLabel,
    nieuwLabel,
    aantalStappen: totalStappen,
    geschatteWaardestijging: Math.round(geschatteWaardestijging * 10) / 10,
  };
}

// ============================================================================
// FORMATTING FUNCTIONS
// ============================================================================

/**
 * Format number as Dutch currency
 * €1.234,56
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Format number as Dutch decimal notation
 * 1.234,56
 */
export function formatNumber(value: number, decimals = 2): string {
  return new Intl.NumberFormat("nl-NL", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Format square meters
 * 120 m²
 */
export function formatSquareMeters(value: number): string {
  return `${formatNumber(value, 0)} m²`;
}

/**
 * Format m3 gas
 * 1.234 m³
 */
export function formatCubicMeters(value: number): string {
  return `${formatNumber(value, 1)} m³`;
}

/**
 * Format percentage
 * 25,5%
 */
export function formatPercentage(value: number): string {
  return `${formatNumber(value, 1)}%`;
}

/**
 * Format years with proper Dutch pluralization
 * 1 jaar, 5 jaar
 */
export function formatYears(value: number): string {
  const rounded = Math.round(value * 10) / 10;
  const label = rounded === 1 ? "jaar" : "jaar";
  return `${formatNumber(rounded, 1)} ${label}`;
}

/**
 * Format kg CO2
 * 1.234 kg CO₂
 */
export function formatCO2(value: number): string {
  return `${formatNumber(value, 0)} kg CO₂`;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Calculate average between min and max
 */
export function calculateAverage(min: number, max: number): number {
  return (min + max) / 2;
}

/**
 * Clamp value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Calculate percentage change
 */
export function calculatePercentageChange(
  oldValue: number,
  newValue: number
): number {
  if (oldValue === 0) return 0;
  return ((newValue - oldValue) / oldValue) * 100;
}

/**
 * Calculate compound interest
 * Useful for warranty/lifespan calculations
 */
export function calculateCompoundGrowth(
  initialValue: number,
  rate: number,
  years: number
): number {
  return initialValue * Math.pow(1 + rate, years);
}
