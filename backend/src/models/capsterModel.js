import { supabase } from "../config/supabaseClient.js";

// TAMBAHKAN 'export' DI SINI
export const CapsterModel = {
  async getAll() {
    const { data, error } = await supabase.from("capsters").select("*");
    if (error) throw error;
    return data;
  }
};