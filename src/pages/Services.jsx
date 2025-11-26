import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then(r => r.json())
      .then(data => setServices(data || []))
      .catch(err => {
        console.error(err);
        setServices([]);
      });
  }, []);

  return (
    <section className="page page-content">
      <div className="container">
        <h2 className="section-title">Daftar Layanan</h2>

        {services.length === 0 ? (
          <div className="card">Belum ada layanan. Cek API atau refresh.</div>
        ) : (
          services.map(s => (
            <Link to={`/services/${s.id}`} key={s.id} style={{ textDecoration: "none" }}>
              <div className="card service-card">
                <div className="service-left">
                  <h3>{s.name}</h3>
                  <p className="muted">{s.description}</p>
                </div>
                <div className="service-right price">Rp {Number(s.price).toLocaleString("id-ID")}</div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
