/**
 * Fallback data for isolatiekenner.nl
 * Contains all Dutch insulation information for 2026
 * Sources: RVO.nl, Rijksoverheid, Agentschap NL
 */

// ============================================================================
// INTERFACES
// ============================================================================

export type IsolatieTypeValue =
  | "dakisolatie"
  | "spouwmuurisolatie"
  | "vloerisolatie"
  | "hr-glas"
  | "kruipruimteisolatie"
  | "gevelisolatie";

export type Moeilijkheidsgraad = 1 | 2 | 3 | 4 | 5;

export interface IsolatieType {
  /** Unieke identifier */
  id: string;
  /** Type isolatie */
  type: IsolatieTypeValue;
  /** Nederlandse naam */
  naam: string;
  /** Gedetailleerde beschrijving */
  beschrijving: string;
  /** Minimale kosten per m2 in euro */
  kostenMin: number;
  /** Maximale kosten per m2 in euro */
  kostenMax: number;
  /** Minimale Rd waarde vereist */
  rdWaarde: number;
  /** Jaarlijkse gasbesparings in m3 */
  besparing: number;
  /** Terugverdientijd jaren (min-max) */
  terugverdientijd: {
    min: number;
    max: number;
  };
  /** Levensduur in jaren */
  levensduur: number;
  /** Moeilijkheidsgraad (1=zeer eenvoudig, 5=zeer moeilijk) */
  moeilijkheidsgraad: Moeilijkheidsgraad;
  /** Energielabel verbetering (aantal stappen) */
  energielabelVerbetering: number;
  /** Warmteverlies reductie percentage */
  warmteverliesReductie: number;
}

export interface SubsidieBedrag {
  /** Isolatie type */
  type: IsolatieTypeValue;
  /** Bedrag per m2 in euro */
  bedragPerM2: number;
  /** Bedrag per m2 bij combinatie met ander isolatie type */
  bedragPerM2Combinatie: number;
  /** Minimale oppervlakte in m2 */
  minOppervlakte: number;
  /** Maximale oppervlakte in m2 */
  maxOppervlakte: number;
  /** Minimale Rd waarde vereist */
  rdWaardeEis: number;
}

export interface EnergielabelInfo {
  /** Energielabel (A++++ t/m G) */
  label: string;
  /** Numerieke index (0 = A++++, 10 = G) */
  index: number;
  /** Hex kleurcode */
  kleur: string;
  /** Nederlandse beschrijving */
  beschrijving: string;
}

export interface IsolatieMateriaal {
  /** Materiaal naam */
  naam: string;
  /** Rd waarde per centimeter */
  rdPerCm: number;
  /** Kosten per m2 in euro */
  kostenPerM2: number;
  /** Duurzaamheidsgraad (1=laag, 5=hoog) */
  duurzaamheid: 1 | 2 | 3 | 4 | 5;
  /** Brandklasse */
  brandklasse: string;
  /** Of materiaal biobased is */
  biobased: boolean;
}

// ============================================================================
// ISOLATIE TYPES - Verified against RVO.nl & Rijksoverheid 2026
// ============================================================================

export const isolatieTypen: IsolatieType[] = [
  {
    id: "dakisolatie-1",
    type: "dakisolatie",
    naam: "Dakisolatie",
    beschrijving:
      "Isolatie van het dak of zoldervloer. Dit is één van de meest kosteneffectieve maatregelen met hoge besparing.",
    kostenMin: 30,
    kostenMax: 60,
    rdWaarde: 3.5,
    besparing: 400,
    terugverdientijd: {
      min: 3,
      max: 7,
    },
    levensduur: 40,
    moeilijkheidsgraad: 2,
    energielabelVerbetering: 2,
    warmteverliesReductie: 30,
  },
  {
    id: "spouwmuurisolatie-1",
    type: "spouwmuurisolatie",
    naam: "Spouwmuurisolatie",
    beschrijving:
      "Isolatie in de spouwmuur van bestaande woningen met twee schalen. Zeer geschikt voor dubbelmuurs bouw.",
    kostenMin: 15,
    kostenMax: 30,
    rdWaarde: 1.1,
    besparing: 250,
    terugverdientijd: {
      min: 2,
      max: 4,
    },
    levensduur: 50,
    moeilijkheidsgraad: 2,
    energielabelVerbetering: 1,
    warmteverliesReductie: 25,
  },
  {
    id: "vloerisolatie-1",
    type: "vloerisolatie",
    naam: "Vloerisolatie (kruipruimte)",
    beschrijving:
      "Isolatie van de vloer boven niet-verwarmde kruipruimte. Voorkomt warmteverlies naar beneden.",
    kostenMin: 20,
    kostenMax: 40,
    rdWaarde: 3.5,
    besparing: 150,
    terugverdientijd: {
      min: 3,
      max: 6,
    },
    levensduur: 40,
    moeilijkheidsgraad: 3,
    energielabelVerbetering: 1,
    warmteverliesReductie: 12,
  },
  {
    id: "hrglas-1",
    type: "hr-glas",
    naam: "HR++ Glas",
    beschrijving:
      "Warmtewering glas (HR++). Vermindert stralingswarmte verlies maar langere terugverdientijd.",
    kostenMin: 150,
    kostenMax: 300,
    rdWaarde: 1.2,
    besparing: 200,
    terugverdientijd: {
      min: 8,
      max: 15,
    },
    levensduur: 25,
    moeilijkheidsgraad: 3,
    energielabelVerbetering: 1,
    warmteverliesReductie: 15,
  },
  {
    id: "kruipruimteisolatie-1",
    type: "kruipruimteisolatie",
    naam: "Kruipruimteisolatie",
    beschrijving:
      "Isolatie van het dak van de kruipruimte. Sluit de ruimte thermisch af van buiten.",
    kostenMin: 20,
    kostenMax: 35,
    rdWaarde: 3.5,
    besparing: 120,
    terugverdientijd: {
      min: 3,
      max: 5,
    },
    levensduur: 40,
    moeilijkheidsgraad: 4,
    energielabelVerbetering: 1,
    warmteverliesReductie: 10,
  },
  {
    id: "gevelisolatie-1",
    type: "gevelisolatie",
    naam: "Gevelisolatie (binnen/buiten)",
    beschrijving:
      "Isolatie van de buitenmuur van binnenaf of van buitenaf. Zeer effectief maar duurder investering.",
    kostenMin: 80,
    kostenMax: 200,
    rdWaarde: 3.5,
    besparing: 350,
    terugverdientijd: {
      min: 8,
      max: 15,
    },
    levensduur: 40,
    moeilijkheidsgraad: 4,
    energielabelVerbetering: 2,
    warmteverliesReductie: 30,
  },
];

// ============================================================================
// SUBSIDIE BEDRAGEN 2026 - ISDE (Individuele Sanering Direkte Effecten)
// Bron: RVO.nl / Rijksoverheid
// ============================================================================

export const subsidieBedragen2026: SubsidieBedrag[] = [
  {
    type: "dakisolatie",
    bedragPerM2: 16.25,
    bedragPerM2Combinatie: 32.5,
    minOppervlakte: 20,
    maxOppervlakte: 200,
    rdWaardeEis: 3.5,
  },
  {
    type: "spouwmuurisolatie",
    bedragPerM2: 5.25,
    bedragPerM2Combinatie: 10.5,
    minOppervlakte: 10,
    maxOppervlakte: 150,
    rdWaardeEis: 1.1,
  },
  {
    type: "vloerisolatie",
    bedragPerM2: 5.5,
    bedragPerM2Combinatie: 11.0,
    minOppervlakte: 20,
    maxOppervlakte: 125,
    rdWaardeEis: 3.5,
  },
  {
    type: "gevelisolatie",
    bedragPerM2: 20.25,
    bedragPerM2Combinatie: 40.5,
    minOppervlakte: 10,
    maxOppervlakte: 200,
    rdWaardeEis: 3.5,
  },
  {
    type: "hr-glas",
    bedragPerM2: 0,
    bedragPerM2Combinatie: 0,
    minOppervlakte: 0,
    maxOppervlakte: 0,
    rdWaardeEis: 0,
  },
  {
    type: "kruipruimteisolatie",
    bedragPerM2: 4.0,
    bedragPerM2Combinatie: 8.0,
    minOppervlakte: 20,
    maxOppervlakte: 150,
    rdWaardeEis: 3.5,
  },
];

// ============================================================================
// ENERGIELABELS - Kleuren en beschrijvingen
// Bron: Rijksoverheid / EPB-NL
// ============================================================================

export const energielabels: EnergielabelInfo[] = [
  {
    label: "A++++",
    index: 0,
    kleur: "#006837",
    beschrijving: "Zeer zuinig (zeer energiezuinig, zeer hoge waarde)",
  },
  {
    label: "A+++",
    index: 1,
    kleur: "#1a9641",
    beschrijving: "Zeer zuinig (zeer energiezuinig, hoge waarde)",
  },
  {
    label: "A++",
    index: 2,
    kleur: "#66bd63",
    beschrijving: "Zuinig (energiezuinig, goed presterende woning)",
  },
  {
    label: "A+",
    index: 3,
    kleur: "#a6d96a",
    beschrijving: "Zuinig (energiezuinig)",
  },
  {
    label: "A",
    index: 4,
    kleur: "#d9ef8b",
    beschrijving: "Zuinig (matig energiezuinig)",
  },
  {
    label: "B",
    index: 5,
    kleur: "#fee08b",
    beschrijving: "Matig zuinig (matig energieverbruik)",
  },
  {
    label: "C",
    index: 6,
    kleur: "#fdae61",
    beschrijving: "Normaal (normaal energieverbruik)",
  },
  {
    label: "D",
    index: 7,
    kleur: "#f46d43",
    beschrijving: "Energieverspiller (hoog energieverbruik)",
  },
  {
    label: "E",
    index: 8,
    kleur: "#d73027",
    beschrijving: "Energieverspiller (zeer hoog energieverbruik)",
  },
  {
    label: "F",
    index: 9,
    kleur: "#a50026",
    beschrijving: "Energieverspiller (extreem hoog energieverbruik)",
  },
  {
    label: "G",
    index: 10,
    kleur: "#67001f",
    beschrijving: "Zeer slecht (ernstig energieverspilling)",
  },
];

// ============================================================================
// ISOLATIE MATERIALEN - Eigenschappen & prijzen 2026
// Bron: RVO.nl, bouwmaterialen leveranciers
// ============================================================================

export const isolatieMaterialen: IsolatieMateriaal[] = [
  {
    naam: "Glaswol",
    rdPerCm: 0.59,
    kostenPerM2: 11.5,
    duurzaamheid: 3,
    brandklasse: "A1",
    biobased: false,
  },
  {
    naam: "Steenwol (mineraalwol)",
    rdPerCm: 0.59,
    kostenPerM2: 14.0,
    duurzaamheid: 4,
    brandklasse: "A1",
    biobased: false,
  },
  {
    naam: "PUR/PIR (schuimplastic)",
    rdPerCm: 0.83,
    kostenPerM2: 20.0,
    duurzaamheid: 4,
    brandklasse: "E",
    biobased: false,
  },
  {
    naam: "EPS (Polystyreen)",
    rdPerCm: 0.55,
    kostenPerM2: 10.0,
    duurzaamheid: 3,
    brandklasse: "E",
    biobased: false,
  },
  {
    naam: "Cellulose (biobased)",
    rdPerCm: 0.56,
    kostenPerM2: 15.0,
    duurzaamheid: 4,
    brandklasse: "B",
    biobased: true,
  },
  {
    naam: "Houtvezel (biobased)",
    rdPerCm: 0.56,
    kostenPerM2: 20.0,
    duurzaamheid: 4,
    brandklasse: "C",
    biobased: true,
  },
  {
    naam: "Hennep (biobased)",
    rdPerCm: 0.56,
    kostenPerM2: 17.0,
    duurzaamheid: 4,
    brandklasse: "C",
    biobased: true,
  },
];

// ============================================================================
// GLOBALE PARAMETERS 2026
// ============================================================================

/** Gemiddelde gasprijs per m3 in Nederland 2026 - Bron: CBS/CIBG */
export const gasPrijsPerM3 = 1.45;

/** Gemiddelde Nederlandse woninggrootte */
export const gemiddeldeWoningM2 = 120;

/** CO2 uitstoot per m3 aardgas */
export const co2PerM3Gas = 1.95;
