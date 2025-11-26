import React from "react";
import "../index.css";

export default function About() {
  return (
    <section className="page about-section">
      <div className="container about-wrapper">
        
        {/* LEFT IMAGE */}
        <div className="about-image-box">
          <img
            src="/images/about-barber.jpg" 
            alt="Barber"
            className="about-image"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="about-text-box">
          <h2 className="section-title">About King Barbershop</h2>

          <p className="about-text">
            King Barbershop menghadirkan pengalaman grooming premium dengan
            barber profesional yang menguasai teknik modern dan klasik.
            Kami mengutamakan kualitas, kenyamanan, dan pelayanan terbaik.
          </p>

          <p className="about-text">
            Setiap pelanggan mendapatkan perhatian penuh — mulai dari gaya rambut,
            perawatan jenggot, hingga rekomendasi grooming sesuai karakter wajah.
          </p>

          <div className="about-info-card">
            <h3 className="about-info-title">Informasi</h3>
            <p><strong>Alamat:</strong> Jl. Contoh No.1</p>
            <p><strong>Jam Operasional:</strong> 09:00 - 21:00</p>
            <p><strong>Phone:</strong> +62 812-3456-7890</p>
          </div>
        </div>
      </div>
    </section>
  );
}
