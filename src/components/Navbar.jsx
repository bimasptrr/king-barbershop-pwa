import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Fungsi untuk mengecek link aktif agar warnanya emas
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <>
      {/* === TOP BAR (Logo Selalu Ada di Atas) === */}
      <div className="navbar-wrapper">
        <div className="navbar container">
          
          {/* Logo Kiri */}
          <div className="navbar-left">
            <img src="/images/logo.png" alt="Logo" className="navbar-logo" />
            <span className="navbar-title">KING BARBERSHOP</span>
          </div>

          {/* MENU DESKTOP (Hanya muncul di Laptop/PC) */}
          <div className="desktop-menu">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/services" className={isActive('/services')}>Services</Link>
            <Link to="/capster" className={isActive('/capster')}>Capster</Link>
            <Link to="/booking" className={isActive('/booking')}>Booking</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
          </div>

        </div>
      </div>

      {/* === BOTTOM NAVIGATION BAR (Hanya muncul di HP) === */}
      <div className="mobile-bottom-nav">
        
        <Link to="/" className={`nav-item ${isActive('/')}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span>Home</span>
        </Link>

        <Link to="/services" className={`nav-item ${isActive('/services')}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
            <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 14H4V8h3v2h2V8h6v2h2V8h3v10z" />
          </svg>
          <span>Layanan</span>
        </Link>

        <Link to="/capster" className={`nav-item ${isActive('/capster')}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span>Capster</span>
        </Link>

        <Link to="/booking" className={`nav-item ${isActive('/booking')}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
          </svg>
          <span>Booking</span>
        </Link>

        <Link to="/about" className={`nav-item ${isActive('/about')}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          <span>About</span>
        </Link>

      </div>
    </>
  );
};

export default Navbar;