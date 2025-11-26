import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [capsters, setCapsters] = useState([]);
  const [formData, setFormData] = useState({
    name: '', phone: '', serviceId: '', capsterId: '', date: '', time: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resServices, resCapsters] = await Promise.all([
          fetch('http://localhost:5000/api/services'),
          fetch('http://localhost:5000/api/capsters')
        ]);
        setServices(await resServices.json());
        setCapsters(await resCapsters.json());
      } catch (error) {
        console.error("Gagal memuat data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (!formData.serviceId || !formData.capsterId) {
      setMessage({ type: 'error', text: 'Mohon pilih Layanan dan Kapster!' });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: formData.name,
          customer_phone: formData.phone,
          service_id: formData.serviceId,
          capster_id: formData.capsterId,
          booking_date: formData.date,
          booking_time: formData.time
        })
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Booking Berhasil! Mengalihkan...' });
        setFormData({ name: '', phone: '', serviceId: '', capsterId: '', date: '', time: '' });
        setTimeout(() => navigate('/queue'), 2000);
      } else {
        throw new Error('Gagal mengirim booking');
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan sistem.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page booking-page">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <h2 className="section-title">Form Booking Online</h2>

        {/* Tombol Cek Antrian (Lebar Penuh agar sejajar form) */}
        <div style={{ marginBottom: '30px', width: '100%', maxWidth: '1000px', textAlign: 'center' }}>
          <Link to="/queue" className="btn-check-queue">
            📋 Cek Daftar Antrian Hari Ini
          </Link>
        </div>

        {message && (
          <div style={{
            padding: '15px', marginBottom: '20px', borderRadius: '8px',
            backgroundColor: message.type === 'success' ? '#d4edda' : '#f8d7da',
            color: message.type === 'success' ? '#155724' : '#721c24',
            width: '100%', maxWidth: '1000px', textAlign: 'center'
          }}>
            {message.text}
          </div>
        )}

        <div className="booking-card">
          <form onSubmit={handleSubmit}>
            
            {/* BARIS 1: NAMA & TELEPON (2 KOLOM) */}
            <div className="form-row">
              <div className="booking-form-group" style={{ flex: 1 }}>
                <label className="booking-label">Nama Lengkap</label>
                <input type="text" name="name" className="booking-input" placeholder="Contoh: Bimas Putra" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="booking-form-group" style={{ flex: 1 }}>
                <label className="booking-label">Nomor WhatsApp</label>
                <input type="tel" name="phone" className="booking-input" placeholder="Contoh: 081234567890" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>

            {/* BARIS 2: SERVICE (FULL WIDTH) */}
            <div className="booking-form-group">
              <label className="booking-label">Pilih Layanan</label>
              <select name="serviceId" className="booking-select" value={formData.serviceId} onChange={handleChange} required>
                <option value="">-- Pilih Service --</option>
                {services.map((srv) => <option key={srv.id} value={srv.id}>{srv.name} - Rp {parseInt(srv.price).toLocaleString('id-ID')}</option>)}
              </select>
            </div>

            {/* BARIS 3: CAPSTER (FULL WIDTH) */}
            <div className="booking-form-group">
              <label className="booking-label">Pilih Kapster</label>
              <select name="capsterId" className="booking-select" value={formData.capsterId} onChange={handleChange} required>
                <option value="">-- Pilih Kapster --</option>
                {capsters.map((cap) => <option key={cap.id} value={cap.id}>{cap.name} (⭐ {cap.rating})</option>)}
              </select>
            </div>

            {/* BARIS 4: TANGGAL & JAM (2 KOLOM) */}
            <div className="form-row">
              <div className="booking-form-group" style={{ flex: 1 }}>
                <label className="booking-label">Tanggal</label>
                <input type="date" name="date" className="booking-input" value={formData.date} onChange={handleChange} required />
              </div>
              <div className="booking-form-group" style={{ flex: 1 }}>
                <label className="booking-label">Jam</label>
                <input type="time" name="time" className="booking-input" value={formData.time} onChange={handleChange} required />
              </div>
            </div>

            <button type="submit" disabled={loading} style={{ marginTop: '20px', padding: '18px', fontSize: '18px' }}>
              {loading ? 'MENGIRIM...' : 'KIRIM BOOKING SEKARANG'}
            </button>
          </form>
        </div>

        {/* SECTION PERATURAN (Lebar disesuaikan) */}
        <div className="booking-rules" style={{ maxWidth: '1000px' }}>
          <div className="rules-title">⚠️ <span>Penting Sebelum Booking</span></div>
          <ul>
            <li>Harap datang <strong>10 menit lebih awal</strong>.</li>
            <li>Keterlambatan lebih dari 15 menit akan dialihkan ke pelanggan lain.</li>
            <li>Reschedule maksimal <strong>H-1</strong>.</li>
            <li>Pastikan nomor WhatsApp aktif untuk konfirmasi.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Booking;