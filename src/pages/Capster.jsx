import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Capster = () => {
  const [capsters, setCapsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCapster, setSelectedCapster] = useState(null);

  useEffect(() => {
    const fetchCapsters = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/capsters');
        const data = await response.json();
        setCapsters(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching capsters:", error);
        setLoading(false);
      }
    };

    fetchCapsters();
  }, []);

  // Logic Modal
  const openModal = (capster) => {
    setSelectedCapster(capster);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCapster(null);
    document.body.style.overflow = 'auto';
  };

  if (loading) return <div className="loading-container"><div className="spinner"></div></div>;

  return (
    <div className="page capster-page">
      <div className="container">
        <h2 className="section-title">Tim Kami</h2>
        
        <div className="capster-list">
          {capsters.map((capster) => (
            <div key={capster.id} className="capster-card">
              {/* Foto Portrait Besar */}
              <div className="capster-image-wrapper">
                <img 
                  src={capster.photo_url || "https://placehold.co/400x500"} 
                  alt={capster.name} 
                  className="capster-image"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x500?text=Barber"; }}
                />
                {/* Badge Rating di atas foto */}
                <div className="rating-badge">
                  ⭐ {capster.rating}
                </div>
              </div>

              <div className="capster-content">
                <h3>{capster.name}</h3>
                <p className="specialty">{capster.specialty}</p>
                
                {/* Button Group */}
                <div className="service-btn-group">
                  <button className="btn-detail" onClick={() => openModal(capster)}>
                    Detail
                  </button>
                  <Link to="/booking" className="btn-booking">
                    Booking
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === MODAL POPUP === */}
      {selectedCapster && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            
            <div className="modal-header">
              <img 
                src={selectedCapster.photo_url} 
                alt={selectedCapster.name} 
                className="modal-image"
                              />
            </div>
            
            <div className="modal-body">
              <div className="modal-title-row">
                <h3>{selectedCapster.name}</h3>
                <span className="modal-price">⭐ {selectedCapster.rating}/5.0</span>
              </div>

              <div className="modal-meta">
                <span>✂️ {selectedCapster.specialty}</span>
                <span style={{marginLeft: '10px'}}>📅 Pengalaman: {selectedCapster.experience}</span>
              </div>

              <p className="modal-desc">{selectedCapster.bio}</p>
              
              <Link to="/booking" className="modal-btn-booking">
                Booking {selectedCapster.name}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Capster;