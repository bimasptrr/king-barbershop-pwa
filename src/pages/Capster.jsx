import React, { useEffect, useState } from "react";

export default function Capster() {
  const [capsters, setCapsters] = useState([]);
  const [loading, setLoading] = useState(true);

  // GANTI URL sesuai backend kamu
  const API_URL = "http://localhost:3000/api/capster";

  useEffect(() => {
    const fetchCapster = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setCapsters(data);
      } catch (err) {
        console.error("Gagal load capster:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCapster();
  }, []);

  return (
    <section className="page page-content">
      <div className="container">
        <h2 className="section-title">Pilih Capster</h2>

        {loading && <p className="muted">Memuat capster...</p>}

        <div className="capster-grid">
          {capsters.map((item) => (
            <div key={item.id} className="capster-card">
              <img
                src={item.photo_url}
                alt={item.name}
                className="capster-image"
              />

              <h3 className="capster-name">{item.name}</h3>
              <p className="capster-exp">Pengalaman: {item.experience} Tahun</p>

              <p className="capster-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
