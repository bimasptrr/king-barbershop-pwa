import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Capster from "./pages/Capster";
import Queue from './pages/Queue';

export default function App() {
  // State untuk loading Splash Screen
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Timer: Tampilkan splash screen selama 3 detik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // === TAMPILAN SPLASH SCREEN ===
  if (loading) {
    return (
      <div className="splash-screen">
        <div className="splash-content">
          {/* Logo Animasi */}
          <img src="/images/logo.png" alt="King Barbershop" className="splash-logo" />
          
          {/* Teks Brand */}
          <h1 className="splash-title">KING BARBERSHOP</h1>
          <p className="splash-subtitle">Premium Grooming Experience</p>
          
          {/* Loading Bar Modern */}
          <div className="loading-bar-container">
            <div className="loading-bar-fill"></div>
          </div>
        </div>
      </div>
    );
  }

  // === TAMPILAN APLIKASI UTAMA ===
  return (
    <Router>
      <Navbar />
      
      {/* Wrapper untuk konten agar tidak tertutup navbar/footer */}
      <div className="app-content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/capster" element={<Capster />} />
          <Route path="/queue" element={<Queue />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}