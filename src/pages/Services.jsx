import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        const data = await response.json();
        setServices(data);
        setLoading(false);
      } catch (error) {
        console.error("Gagal mengambil data services:", error);
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  if (loading) return <div className="loading-container"><div className="spinner"></div></div>;

  return (
    <div className="page services-page">
      <div className="container">
        <h2 className="section-title">Layanan Eksklusif Kami</h2>

        {/* Tombol Antrian SUDAH DIHAPUS DARI SINI */}

        <div className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-wrapper">
                <img 
                  src={service.image_url || "https://placehold.co/600x400"} 
                  alt={service.name} 
                  className="service-image"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600"; }}
                />
              </div>

              <div className="service-content">
                <div className="service-header">
                  <h3>{service.name}</h3>
                  <span className="price">Rp {parseInt(service.price).toLocaleString('id-ID')}</span>
                </div>
                <p className="service-desc">{service.description}</p>
                <div className="service-btn-group">
                  <button className="btn-detail" onClick={() => openModal(service)}>Detail</button>
                  <Link to="/booking" className="btn-booking">Booking</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <img 
                src={selectedService.image_url} 
                alt={selectedService.name} 
                className="modal-image"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600"; }}
              />
            </div>
            <div className="modal-body">
              <div className="modal-title-row">
                <h3>{selectedService.name}</h3>
                <span className="modal-price">Rp {parseInt(selectedService.price).toLocaleString('id-ID')}</span>
              </div>
              {selectedService.duration && <div className="modal-meta"><span>⏱️ Estimasi: {selectedService.duration}</span></div>}
              <p className="modal-desc">{selectedService.description}</p>
              {selectedService.benefits && (
                <div className="modal-benefits">
                  <h4>Benefits:</h4>
                  <ul>{selectedService.benefits.split(',').map((b, i) => <li key={i}>{b.trim()}</li>)}</ul>
                </div>
              )}
              <Link to="/booking" className="modal-btn-booking">Booking Sekarang</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;