import { supabase } from "../config/supabaseClient.js";

// TAMBAHKAN 'export' DI SINI
export const ServiceModel = {
  async getAll() {
    const { data, error } = await supabase.from("services").select("*");
    if (error) throw error;
    return data;
  }
};