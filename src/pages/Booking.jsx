import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [capsters, setCapsters] = useState([]);
  
  // ... (State formData, loading, message tetap sama) ...
  const [formData, setFormData] = useState({
    name: '', phone: '', serviceId: '', capsterId: '', date: '', time: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // ... (useEffect fetch data tetap sama) ...
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resServices, resCapsters] = await Promise.all([
          fetch('https://king-barber-api.vercel.app/api/services'),
          fetch('https://king-barber-api.vercel.app/api/capsters')
        ]);
        setServices(await resServices.json());
        setCapsters(await resCapsters.json());
      } catch (error) {
        console.error("Gagal memuat data:", error);
      }
    };
    fetchData();
  }, []);

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 9; i <= 21; i++) {
      const hour = i < 10 ? `0${i}` : i;
      slots.push(`${hour}:00`);
    }
    return slots;
  };
  const timeSlots = generateTimeSlots();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // === FUNGSI BARU: KIRIM KONFIRMASI WA ===
  const sendWhatsAppConfirmation = (data, serviceName, capsterName) => {
    // 1. Format Nomor HP (Ganti 08 di depan jadi 628)
    let phoneNumber = data.phone;
    if (phoneNumber.startsWith('0')) {
      phoneNumber = '62' + phoneNumber.slice(1);
    }

    // 2. Susun Pesan
    const message = `
*KONFIRMASI BOOKING KING BARBERSHOP* 💈
Halo Kak *${data.name}*, terima kasih telah melakukan booking!

Berikut detail pesanan Anda:
-----------------------------------
📅 Tanggal : ${data.date}
⏰ Jam     : ${data.time}
💇‍♂️ Layanan : ${serviceName}
✂️ Kapster : ${capsterName}
-----------------------------------

Mohon simpan bukti ini. Harap datang 10 menit sebelum jadwal. 
Terima kasih! 🙏
    `.trim();

    // 3. Redirect ke WhatsApp (Membuka Tab Baru / Aplikasi WA)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // === HANDLE SUBMIT YANG DIPERBARUI ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (!formData.serviceId || !formData.capsterId || !formData.time) {
      setMessage({ type: 'error', text: 'Mohon lengkapi semua data booking!' });
      setLoading(false);
      return;
    }

    if (formData.phone.length < 10) {
      setMessage({ type: 'error', text: 'Nomor WhatsApp tidak valid!' });
      setLoading(false);
      return;
    }

    try {
      // 1. Simpan ke Database dulu
      const response = await fetch('https://king-barber-api.vercel.app/api/bookings', {
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
        // 2. Cari Nama Service & Capster untuk pesan WA (karena di form cuma ada ID)
        const selectedService = services.find(s => s.id === formData.serviceId)?.name || '-';
        const selectedCapster = capsters.find(c => c.id === formData.capsterId)?.name || '-';

        // 3. Kirim WA
        sendWhatsAppConfirmation(formData, selectedService, selectedCapster);

        setMessage({ type: 'success', text: 'Booking Berhasil! Membuka WhatsApp...' });
        
        // 4. Reset & Redirect
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
            <div className="form-row">
              <div className="booking-form-group" style={{ flex: 1 }}>
                <label className="booking-label">Nama Lengkap</label>
                <input type="text" name="name" className="booking-input" placeholder="Contoh: Bimas Putra" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="booking-form-group" style={{ flex: 1 }}>
                <label className="booking-label">Nomor WhatsApp</label>
                <input 
                  type="tel" 
                  name="phone" 
                  className="booking-input" 
                  placeholder="Contoh: 081234567890" 
                  value={formData.phone} 
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={15}
                  required 
                />
                <small style={{ color: '#888', fontSize: '12px' }}>*Nomor aktif untuk menerima pesan konfirmasi</small>
              </div>
            </div>

            <div className="booking-form-group">
              <label className="booking-label">Pilih Layanan</label>
              <select name="serviceId" className="booking-select" value={formData.serviceId} onChange={handleChange} required>
                <option value="">-- Pilih Service --</option>
                {services.map((srv) => (
                  <option key={srv.id} value={srv.id}>{srv.name} - Rp {parseInt(srv.price).toLocaleString('id-ID')}</option>
                ))}
              </select>
            </div>

            <div className="booking-form-group">
              <label className="booking-label">Pilih Kapster</label>
              <select name="capsterId" className="booking-select" value={formData.capsterId} onChange={handleChange} required>
                <option value="">-- Pilih Kapster --</option>
                {capsters.map((cap) => (
                  <option key={cap.id} value={cap.id}>{cap.name} (⭐ {cap.rating})</option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="booking-form-group" style={{ flex: 1 }}>
                <label className="booking-label">Tanggal</label>
                <input type="date" name="date" className="booking-input" value={formData.date} onChange={handleChange} required />
              </div>
              
              <div className="booking-form-group" style={{ flex: 1 }}>
                <label className="booking-label">Jam (09:00 - 21:00)</label>
                <select name="time" className="booking-select" value={formData.time} onChange={handleChange} required>
                  <option value="">-- Pilih Jam --</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" disabled={loading} style={{ marginTop: '20px', padding: '18px', fontSize: '18px' }}>
              {loading ? 'MENGIRIM...' : 'KIRIM BOOKING & TERIMA WA'}
            </button>
          </form>
        </div>

        <div className="booking-rules" style={{ maxWidth: '1000px' }}>
          <div className="rules-title">⚠️ <span>Penting Sebelum Booking</span></div>
          <ul>
            <li>Harap datang <strong>10 menit lebih awal</strong>.</li>
            <li>Keterlambatan lebih dari 15 menit akan dialihkan ke pelanggan lain.</li>
            <li>Reschedule maksimal <strong>H-1</strong>.</li>
            <li>Pastikan nomor WhatsApp aktif karena konfirmasi dikirim ke nomor tersebut.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Booking;