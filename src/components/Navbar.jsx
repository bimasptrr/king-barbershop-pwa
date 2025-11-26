import { NavLink } from "react-router-dom";
import "../index.css";
import logo from "/images/logo.png";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">

        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="navbar-title">KING BARBERSHOP</span>
        </div>

        <div className="menu">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/capster">Capster</NavLink> {/* ← TAMBAH MENU INI */}
          <NavLink to="/booking">Booking</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

      </nav>
    </div>
  );
}
