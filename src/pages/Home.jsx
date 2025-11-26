import React from "react";
import { Link } from "react-router-dom";
import "./../index.css";

export default function Home() {
  return (
    <div className="home-hero">
      <div className="home-hero-inner">

        <div className="home-title-wrapper">

          {/* LOGO BESAR TENGAH */}
          <img
            src="/images/logo.png"
            alt="Barber King Logo"
            className="home-title-logo"
          />

          {/* GRUP TEKS */}
          <div className="home-text-group">
            <h1 className="home-title">KING BARBERSHOP</h1>

                      <p className="home-desc">
              "King Barbershop menghadirkan pengalaman grooming kelas premium
              dengan barber profesional, fasilitas nyaman, dan pelayanan terbaik."
            </p>

            {/* BUTTON SERVICE */}
            <Link to="/Booking" className="home-btn">
              BOOKING NOW!
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
