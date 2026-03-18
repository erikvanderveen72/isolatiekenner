/**
 * Supabase client configuration
 * Falls back to local data if connection unavailable
 */

import { createClient } from "@supabase/supabase-js";
import {
  isolatieTypen,
  subsidieBedragen2026,
  energielabels,
  type IsolatieType,
  type SubsidieBedrag,
  type EnergielabelInfo,
} from "./fallback-data";

// ============================================================================
// CLIENT INITIALIZATION
// ============================================================================

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

let supabase: ReturnType<typeof createClient> | null = null;

// Only initialize Supabase if credentials are available
if (supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.warn("Failed to initialize Supabase client, using fallback data");
  }
}

// ============================================================================
// FETCH FUNCTIONS WITH FALLBACK
// ============================================================================

/**
 * Fetch isolation types from Supabase or fallback to local data
 */
export async function getIsolatieTypen(): Promise<IsolatieType[]> {
  if (!supabase) {
    return isolatieTypen;
  }

  try {
    const { data, error } = await supabase
      .from("isolatie_typen")
      .select("*")
      .order("naam", { ascending: true });

    if (error) {
      console.warn("Supabase error fetching isolatieTypen:", error);
      return isolatieTypen;
    }

    // Validate and return data or fallback
    return (data && data.length > 0 ? data : isolatieTypen) as IsolatieType[];
  } catch (error) {
    console.warn("Exception fetching isolatieTypen, using fallback:", error);
    return isolatieTypen;
  }
}

/**
 * Fetch subsidie bedragen from Supabase or fallback to local data
 */
export async function getSubsidieBedragen(): Promise<SubsidieBedrag[]> {
  if (!supabase) {
    return subsidieBedragen2026;
  }

  try {
    const { data, error } = await supabase
      .from("subsidie_bedragen_2026")
      .select("*")
      .order("type", { ascending: true });

    if (error) {
      console.warn("Supabase error fetching subsidieBedragen:", error);
      return subsidieBedragen2026;
    }

    // Validate and return data or fallback
    return (
      (data && data.length > 0 ? data : subsidieBedragen2026) as SubsidieBedrag[]
    );
  } catch (error) {
    console.warn("Exception fetching subsidieBedragen, using fallback:", error);
    return subsidieBedragen2026;
  }
}

/**
 * Fetch energielabel information from Supabase or fallback to local data
 */
export async function getEnergielabels(): Promise<EnergielabelInfo[]> {
  if (!supabase) {
    return energielabels;
  }

  try {
    const { data, error } = await supabase
      .from("energielabels")
      .select("*")
      .order("index", { ascending: true });

    if (error) {
      console.warn("Supabase error fetching energielabels:", error);
      return energielabels;
    }

    // Validate and return data or fallback
    return (
      (data && data.length > 0 ? data : energielabels) as EnergielabelInfo[]
    );
  } catch (error) {
    console.warn("Exception fetching energielabels, using fallback:", error);
    return energielabels;
  }
}

/**
 * Get single isolatie type by ID
 */
export async function getIsolatieTypeById(id: string): Promise<IsolatieType | null> {
  const types = await getIsolatieTypen();
  return types.find((t) => t.id === id) || null;
}

/**
 * Get single isolatie type by type value
 */
export async function getIsolatieTypeByType(
  type: string
): Promise<IsolatieType | null> {
  const types = await getIsolatieTypen();
  return types.find((t) => t.type === type) || null;
}

/**
 * Get subsidie bedrag for specific isolatie type
 */
export async function getSubsidieBedragByType(
  type: string
): Promise<SubsidieBedrag | null> {
  const bedragen = await getSubsidieBedragen();
  return bedragen.find((b) => b.type === type) || null;
}

/**
 * Health check - verify data is loaded properly
 */
export async function healthCheck(): Promise<{
  supabaseConnected: boolean;
  dataLoaded: boolean;
  message: string;
}> {
  try {
    const types = await getIsolatieTypen();
    const subsidies = await getSubsidieBedragen();
    const labels = await getEnergielabels();

    const allDataLoaded =
      types.length > 0 && subsidies.length > 0 && labels.length > 0;

    return {
      supabaseConnected: !!supabase,
      dataLoaded: allDataLoaded,
      message: `Isolatiekenner data loaded. ${allDataLoaded ? "✓" : "✗"} Supabase: ${supabase ? "connected" : "offline"}`,
    };
  } catch (error) {
    return {
      supabaseConnected: false,
      dataLoaded: false,
      message: `Error during health check: ${error instanceof Error ? error.message : "Unknown error"}`,
    };
  }
}
