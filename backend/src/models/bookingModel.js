import { supabase } from "../config/supabaseClient.js";

// TAMBAHKAN 'export' DI SINI
export const BookingModel = {
  async create(payload) {
    const { data, error } = await supabase
      .from("bookings")
      .insert([payload])
      .select();
    if (error) throw error;
    return data[0];
  },
  
  async getAll() {
    const { data, error } = await supabase
      .from("bookings")
      .select(`
        id, customer_name, booking_date, booking_time,
        services (name, price),
        capsters (name)
      `);
    if (error) throw error;
    return data;
  }
};