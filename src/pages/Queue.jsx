import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Queue = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Panggil API Backend
        const response = await fetch('http://localhost:5000/api/bookings');
        const data = await response.json();
        
        // Urutkan berdasarkan Tanggal & Jam terdekat
        const sortedData = data.sort((a, b) => {
          const dateA = new Date(`${a.booking_date}T${a.booking_time}`);
          const dateB = new Date(`${b.booking_date}T${b.booking_time}`);
          return dateA - dateB;
        });

        setBookings(sortedData);
        setLoading(false);
      } catch (error) {
        console.error("Gagal mengambil data antrian:", error);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Fungsi Format Tanggal Indonesia
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  if (loading) return <div className="loading-container"><div className="spinner"></div></div>;

  return (
    <div className="page queue-page">
      <div className="container">
        <h2 className="section-title">Daftar Antrian Booking</h2>
        
        <div className="queue-container">
          {bookings.length === 0 ? (
            <div className="empty-queue">
              <p>Belum ada antrian saat ini.</p>
              <Link to="/booking" className="btn-booking-small">Booking Sekarang</Link>
            </div>
          ) : (
            <div className="table-wrapper">
              <table className="queue-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Pelanggan</th>
                    <th>Layanan</th>
                    <th>Kapster</th>
                    <th>Tanggal & Jam</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td className="customer-name">{item.customer_name}</td>
                      <td>{item.services?.name || '-'}</td>
                      <td>{item.capsters?.name || '-'}</td>
                      <td>
                        <div className="date-time">
                          <span>📅 {formatDate(item.booking_date)}</span>
                          <span className="time-badge">⏰ {item.booking_time.slice(0, 5)}</span>
                        </div>
                      </td>
                      <td>
                        <span className="status-badge">Upcoming</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div style={{marginTop: '30px', textAlign: 'center'}}>
           <Link to="/booking" className="back-link">← Kembali </Link>
        </div>
      </div>
    </div>
  );
};

export default Queue;