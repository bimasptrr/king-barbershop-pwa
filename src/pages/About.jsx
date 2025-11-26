import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page about-page">
      <div className="container">
        
        {/* === SEGMEN 1: HERO STORY === */}
        <div className="about-hero">
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop" 
              alt="King Barbershop Interior" 
              className="about-hero-img"
            />
            {/* Dekorasi Kotak Emas di belakang gambar */}
            <div className="img-decoration"></div>
          </div>

          <div className="about-content">
            <h4 className="sub-title">EST. 2024</h4>
            <h2 className="main-title">More Than Just a Haircut.</h2>
            <p className="description">
              King Barbershop menghadirkan pengalaman grooming premium dengan sentuhan 
              klasik dan modern. Kami percaya bahwa gaya rambut adalah cerminan karakter 
              seorang pria.
            </p>
            <p className="description">
              Setiap pelanggan mendapatkan perhatian penuh — mulai dari konsultasi gaya, 
              perawatan kulit kepala, hingga rekomendasi produk terbaik. Bukan sekadar 
              potong rambut, ini adalah ritual untuk menaikkan kepercayaan diri Anda.
            </p>
            
            <Link to="/booking" className="btn-about-cta">
              Booking Appointment
            </Link>
          </div>
        </div>

        {/* === SEGMEN 2: STATS BAR (Agar terlihat penuh) === */}
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Tahun Pengalaman</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">10k+</span>
            <span className="stat-label">Pelanggan Puas</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Premium Product</span>
          </div>
        </div>

        {/* === SEGMEN 3: LOCATION & INFO CARD === */}
        <div className="location-card">
          <div className="location-text">
            <h3>Visit Our Studio</h3>
            <p>Datang dan rasakan suasana gentleman lounge yang nyaman.</p>
            
            <div className="info-grid">
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <strong>Alamat</strong>
                  <p>Jl. Contoh No.1, Semarang</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">🕒</span>
                <div>
                  <strong>Jam Operasional</strong>
                  <p>Senin - Minggu: 09:00 - 21:00</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>+62 812-3456-7890</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Peta dummy / Gambar Lokasi */}
          <div className="location-map">
             <img src="https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=800&auto=format&fit=crop" alt="Map" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;