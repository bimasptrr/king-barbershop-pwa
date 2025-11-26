import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Pastikan import css benar

const Navbar = () => {
  // State untuk toggle menu mobile
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk mengubah status buka/tutup
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar container">
        {/* LEFT SECTION */}
        <div className="navbar-left">
          <img src="/images/logo.png" alt="Logo" className="navbar-logo" />
          <span className="navbar-title">KING BARBERSHOP</span>
        </div>

        {/* HAMBURGER MENU (Hanya muncul di Mobile) */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* MENU LINKS */}
        {/* Tambahkan class 'active' jika isOpen bernilai true */}
        <div className={`menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/capster" onClick={() => setIsOpen(false)}>Capster</Link>
          <Link to="/booking" onClick={() => setIsOpen(false)}>Booking</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;