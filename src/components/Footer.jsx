import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          
          {/* BAGIAN KIRI: LOGO & COPYRIGHT */}
          <div className="footer-left">
            <div className="footer-logo">
              <img src="/images/logo.png" alt="Logo" className="logo-img" />
              <span className="brand-name">KING BARBERSHOP</span>
            </div>
            <p className="copyright">
              &copy; {new Date().getFullYear()} King Barbershop. All Rights Reserved.
            </p>
          </div>

          {/* BAGIAN KANAN: MENU & SOSMED */}
          <div className="footer-right">
            {/* Menu Horizontal */}
            <div className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/capster">Capster</Link>
              <Link to="/booking">Booking</Link>
            </div>

            {/* Social Icons */}
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i> IG
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fab fa-whatsapp"></i> WA
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;