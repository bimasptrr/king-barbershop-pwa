import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/services/${id}`)
      .then(r => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then(data => setService(data))
      .catch(err => {
        console.error(err);
        setService(null);
      });
  }, [id]);

  return (
    <section className="page page-content">
      <div className="container">
        {!service ? (
          <div className="card">Loading...</div>
        ) : (
          <>
            <h2 className="section-title">{service.name}</h2>
            <div className="card">
              <p className="muted">{service.description}</p>
              <p style={{ marginTop: 16 }}><strong className="price">Rp {Number(service.price).toLocaleString("id-ID")}</strong></p>
              <button onClick={() => navigate("/booking")}>Booking Sekarang</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
