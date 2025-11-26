import React, { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    customer_name: "",
    phone: "",
    service_id: "",
    date: "",
    time: ""
  });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Failed");
      await res.json();
      alert("Booking berhasil!");
      setForm({ customer_name: "", phone: "", service_id: "", date: "", time: "" });
    } catch (err) {
      console.error(err);
      alert("Gagal mengirim booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page page-content">
      <div className="container">
        <h2 className="section-title">Booking</h2>

        <form className="card form" onSubmit={submit}>
          <label>Nama Lengkap</label>
          <input required value={form.customer_name} onChange={(e) => setForm({...form, customer_name: e.target.value})} />

          <label>Nomor Telepon</label>
          <input required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />

          <label>ID Layanan (optional)</label>
          <input value={form.service_id} onChange={(e) => setForm({...form, service_id: e.target.value})} />

          <label>Tanggal</label>
          <input type="date" required value={form.date} onChange={(e) => setForm({...form, date: e.target.value})} />

          <label>Waktu</label>
          <input type="time" required value={form.time} onChange={(e) => setForm({...form, time: e.target.value})} />

          <button type="submit" disabled={loading}>{loading ? "Mengirim..." : "Kirim Booking"}</button>
        </form>
      </div>
    </section>
  );
}
